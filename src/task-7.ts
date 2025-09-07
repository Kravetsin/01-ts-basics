function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
      console.log("------Task 7------");
    }, 1000);
  });
}
//! ============================================================================

getMessage().then((result) => console.log(result));
