interface IRequest {
  digitableLine: string;
}

class VerifyBoletoService {
  execute({ digitableLine }: IRequest) {
    return { message: digitableLine }
  }
}


export { VerifyBoletoService }
