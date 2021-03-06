import { ICachePair } from '.';

export abstract class IAsyncStorageStrategy {
  abstract getAll(cacheKey: string): Array<ICachePair<any>> | Promise<Array<ICachePair<any>>>;
  abstract add(entity: ICachePair<any>, cacheKey: string): void | Promise<void>;
  abstract updateAtIndex(index: number, entity: ICachePair<any>, cacheKey: string): void | Promise<void>;
  abstract removeAtIndex(index: number, cacheKey: string): void | Promise<void>;
  abstract removeAll(cacheKey: string): void | Promise<void>;
  abstract addMany(entities: ICachePair<any>[], cacheKey: string): Promise<void>;
}