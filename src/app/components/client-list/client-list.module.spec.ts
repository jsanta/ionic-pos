import { ClientListModule } from './client-list.module';

describe('ClientListModule', () => {
  let clientListModule: ClientListModule;

  beforeEach(() => {
    clientListModule = new ClientListModule();
  });

  it('should create an instance', () => {
    expect(clientListModule).toBeTruthy();
  });
});
