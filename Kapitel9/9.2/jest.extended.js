import { format } from 'util';

beforeEach(() => {
  const { error } = global.console;

  global.console.error = (...args) => {
    for (let i = 0; i < args.length; i += 1) {
      const arg = args[i];

      // We want to fail a component test if there is a Vue warning
      // If your test points to this line for an error look for a Vue warn in the console messages
      if (typeof arg === 'string' && arg.includes('Vue warn')) {
        throw new Error(format(...args));
      }
    }

    error(...args);
  };
});
