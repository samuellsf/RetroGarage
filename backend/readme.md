# RetroGarage API - Rotas

Base URL:

http://localhost:3000

---

# Auth

Responsável pelo cadastro e autenticação de usuários.

## POST /api/auth/register

Cria uma nova conta de usuário.

### Body

```json
{
    "name": "Alvaro de Sousa",
    "email": "email.exemplo@exemplo.com",
    "password": "SenhaExemplo"
}
```

### Resposta

```json
{
    "success": true,
    "message": "Usuario criado"
}
```

---

## POST /api/auth/login

Autentica um usuário.

Retorna um token JWT para acesso às rotas protegidas.

### Body

```json
{
    "email": "email.exemplo@exemplo.com",
    "password": "SenhaExemplo123"
}
```

### Resposta

```json
{
    "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

# Products

Responsável pelo catálogo de produtos.

## GET /api/products

Retorna todos os produtos cadastrados.

---

## GET /api/products/:id

Retorna um produto específico.

### Exemplo

```http
GET /api/products/1
```

---

## GET /api/products/category/:id

Retorna todos os produtos pertencentes a uma categoria.

### Exemplo

```http
GET /api/products/category/3
```

---

## POST /api/products

Cria um novo produto.

### Body

```json
{
    "name": "Ford Mustang 1969",
    "description": "Muscle car clássico americano",
    "price": 350000.00,
    "stock": 1,
    "image": "/assets/images/mustang69.jpg",
    "category_id": 1
}
```

### Resposta

```json
{
    "success": true,
    "message": "Produto criado"
}
```

---

## DELETE /api/products/:id

Remove um produto.

### Exemplo

```http
DELETE /api/products/1
```

---

# Categories

Responsável pela listagem das categorias.

## GET /api/categories

Retorna todas as categorias cadastradas.

Exemplos:

- Carros
- Motos
- Peças

---

# Cart

Responsável pelo carrinho de compras.

Todas as rotas exigem autenticação JWT.

Header obrigatório:

```http
Authorization: Bearer SEU_TOKEN
```

---

## GET /api/cart

Retorna os itens presentes no carrinho do usuário autenticado.

---

## POST /api/cart

Adiciona um produto ao carrinho.

### Body

```json
{
    "product_id": 1,
    "quantity": 2
}
```

### Resposta

```json
{
    "success": true,
    "message": "Produto adicionado ao carrinho"
}
```

---

## DELETE /api/cart/:id

Remove um item do carrinho.

### Exemplo

```http
DELETE /api/cart/1
```

---

# Orders

Responsável pelos pedidos do usuário.

Todas as rotas exigem autenticação JWT.

Header obrigatório:

```http
Authorization: Bearer SEU_TOKEN
```

---

## POST /api/orders

Cria um novo pedido.

### Body

```json
{
    "total": 350000.00
}
```

### Resposta

```json
{
    "success": true,
    "message": "Pedido criado com sucesso"
}
```

ou

```json
{
    "success": true,
    "message": "Pedido criado com sucesso",
    "orderId": 1
}
```

---

## GET /api/orders

Retorna todos os pedidos do usuário autenticado.

---

## GET /api/orders/:id

Retorna um pedido específico.

### Exemplo

```http
GET /api/orders/1
```

---

# Rotas Protegidas

Necessitam do header:

```http
Authorization: Bearer TOKEN
```

Rotas protegidas:

```text
GET    /api/cart
POST   /api/cart
DELETE /api/cart/:id

POST   /api/orders
GET    /api/orders
GET    /api/orders/:id
```

---

# Fluxo da Aplicação

Cadastro
↓
Login
↓
Recebe JWT
↓
Consulta Categorias
↓
Consulta Produtos
↓
Adiciona ao Carrinho
↓
Visualiza Carrinho
↓
Cria Pedido
↓
Consulta Histórico de Pedidos