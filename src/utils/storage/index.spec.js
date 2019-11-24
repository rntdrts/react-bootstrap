import { memoryStorage, getStorage } from 'app/utils/storage';

const unsupportedStorage = (function() {
  return {
    getItem() {
      throw new Error('not supported');
    }
  }
});

describe('storage util', () => {
  it('it validates memoryStorage methods {getItem, setItem}', () => {
    let storage = memoryStorage();

    expect(storage.getItem('random_key')).toEqual(null);

    storage.setItem('random_key', 'papaia');

    expect(storage.getItem('random_key')).toEqual('papaia')
  });

  it('it validates getStorage return window.locaStorage', () => {
    let storage = getStorage('localStorage');

    window.localStorage.setItem('random_key', 'papaia');
    expect(storage.getItem('random_key')).toEqual('papaia');
  });

  it('it validates getStorage works without window.localStorage', () => {
    Object.defineProperty(window, 'localStorage', {
      value: unsupportedStorage
    });

    let storage = getStorage('localStorage');

    storage.setItem('random_key', 'papaia');

    expect(storage.getItem('random_key')).toEqual('papaia')
  });
});
