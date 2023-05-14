const client = {
  appName: fillDefault(process.env.appName, "EdsonNhantumbo"),
  appLogo: process.env.appLogo ?? undefined,
  appThemeColor: fillDefault(process.env.appThemeColor, "#22c55e"),
  appSummary: fillDefault(process.env.appSummary, "Pergunte-me qualquer coisa que quiseres."),
  exampleInput: process.env.exampleInput ?? "Pergunte-me algo.",
};

export default client;

function fillDefault(value: string | undefined, defaultValue: string): string {
  return !value ? defaultValue : value;
}
