export const mockRequest = (_, data) =>
  new Promise(
    resolve =>
      setTimeout(_ => {
        console.log('Submitted', data);
        resolve(data);
      }),
    1000
  );
