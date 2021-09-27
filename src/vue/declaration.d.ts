declare module "*.vue";

declare module NodeJS {
  interface Global {
    performance: any;
  }
}
