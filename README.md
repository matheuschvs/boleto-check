# Boleto Check

<p align="center">
Uma API capaz de verificar a linha digitável de boletos de título bancário e de pagamento de concessionárias, além de retornar os dados existentes nela caso a mesma seja válida.
</p>


## Uso

Após clonar o repositório e instalar as dependências, executar:
```bash
  yarn test ou npm run test
```
para iniciar os testes e gerar o diretório de cobertura de testes.
```bash
  yarn dev ou npm run dev
```
para iniciar o servidor de desenvolvimento.


## Rotas

### Get `/boleto/:linha-digitável`

Principal rota, responsável pela verificação da linha digitável dos boletos

### Resposta: Status 200

```json
{
	"amount": "5,000.00",
	"expirationDate": "2025-01-01",
	"barCode": "99999999999999999990000000000000000000000000",
}
```

### Resposta: Status 400

```json
{
	"message": "Invalid digitable line"
}
```
---
### Get `/api-docs`

Para mais informações acesse a rota acima que contém a documentação da API
