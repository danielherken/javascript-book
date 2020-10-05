import { format } from 'util';

beforeEach(() => {
  const { error } = global.console;

  global.console.error = (...args) => {
    for (let i = 0; i < args.length; i += 1) {
      const arg = args[i];

      if (typeof arg === 'string' && arg.includes('Vue warn')) {
        throw new Error(format(...args));
      }
    }

    error(...args);
  };
});
