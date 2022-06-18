# Boleto Check

<p align="center">
Uma API capaz de verificar a linha digitável de boletos de título bancário e de pagamento de concessionárias, além de retornar os dados existentes nela caso a mesma seja válida.
</p>


## Uso

Após clonar o repositório e instalar as dependências, executar:
```bash
  yarn test
```
para iniciar os testes e gerar o arquivo de cobertura de testes.
```bash
  yarn dev
```
para iniciar o servidor de desenvolvimento.


## Rotas

### Get `/boleto/:linha-digitável`

### Resposta: Status 200

```json
{
	"amount": "5,000.00",
	"expirationDate": "2025-01-01",
	"barCode": "99999999999999999990000000000000000000000000",
}

```
---

### Resposta: Status 400

```json
{
	"message": "Invalid digitable line"
}

```
