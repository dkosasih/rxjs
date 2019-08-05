import { fromEvent } from 'rxjs';

interface NodeStyleEventEmitter {
  addListener: (eventName: string | symbol, handler: NodeEventHandler) => this;
  removeListener: (eventName: string | symbol, handler: NodeEventHandler) => this;
}

interface HasEventTargetAddRemove<E> {
  addEventListener(type: string, listener: ((evt: E) => void) | null, options?: boolean | AddEventListenerOptions): void;
  removeEventListener(type: string, listener?: ((evt: E) => void) | null, options?: EventListenerOptions | boolean): void;
}

type NodeEventHandler = (...args: any[]) => void;

interface EventListenerOptions {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
}

interface AddEventListenerOptions extends EventListenerOptions {
  once?: boolean;
  passive?: boolean;
}

const hasEventTargetAddRemove: HasEventTargetAddRemove<string> = {
  addEventListener: (type, listener, options?) => { },
  removeEventListener: (type, listener, options?) => { }
};

const nodeStyleEventEmitter: NodeStyleEventEmitter = {
  addListener: (eventName, handler) => nodeStyleEventEmitter ,
  removeListener: (eventName, handler) => nodeStyleEventEmitter
};

const div: HTMLDivElement = new HTMLDivElement();

it('should infer correctly with HasEventTargetAddRemove event type', () => { 
  const a = fromEvent(hasEventTargetAddRemove, 'foo'); // $ExpectType Observable<string>
});

it('should infer correctly with NodeStyleEventEmitter event type', () => {
  const a = fromEvent(nodeStyleEventEmitter, 'foo'); // $ExpectType Observable<{}>
});

it('should infer correctly DOM event', () => {
  const a = fromEvent(div, 'click'); // $ExpectType Observable<Event>
});
