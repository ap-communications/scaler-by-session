class Environment {
  get env() {
    return process.env.NODE_ENV || 'local';
  }

  get port() {
    const p = parseInt(process.env.PORT || '');
    return isNaN(p) ? 3000: p;
  }

  get isProduction() {
    return !['local', 'test'].find(element => element === this.env);
  }
}

export default new Environment();
