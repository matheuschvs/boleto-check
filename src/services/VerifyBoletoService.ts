interface IRequest {
  digitableLine: string;
}

class VerifyBoletoService {
  execute({ digitableLine }: IRequest) {
    return { message: digitableLine }
  }
}

const verifyBoletoService = new VerifyBoletoService();
export { verifyBoletoService }
