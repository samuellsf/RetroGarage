USE retrogarage;

-- =====================================================
-- CATEGORIAS
-- =====================================================

INSERT INTO categorias (name)
VALUES
('Carros'),
('Motos'),
('Peças');

-- =====================================================
-- PRODUTOS
-- =====================================================

INSERT INTO products
(
    name,
    description,
    price,
    stock,
    image,
    category_id
)
VALUES

(
    'Ford Mustang 1969',
    'Muscle car clássico americano',
    350000.00,
    1,
    '/assets/images/mustang69.jpg',
    1
),

(
    'Chevrolet Camaro SS 1969',
    'Camaro restaurado em estado de coleção',
    320000.00,
    1,
    '/assets/images/camaro69.jpg',
    1
),

(
    'Porsche 911 Classic',
    'Ícone alemão dos esportivos',
    450000.00,
    1,
    '/assets/images/porsche911.jpg',
    1
),

(
    'Harley Davidson Heritage',
    'Moto clássica custom',
    95000.00,
    1,
    '/assets/images/harley.jpg',
    2
),

(
    'Honda CB 750 Four',
    'Lendária moto japonesa',
    75000.00,
    1,
    '/assets/images/cb750.jpg',
    2
),

(
    'Volante Original Mustang',
    'Peça original para restauração',
    1200.00,
    5,
    '/assets/images/volante.jpg',
    3
),

(
    'Farol Chevrolet Opala',
    'Farol dianteiro original',
    450.00,
    10,
    '/assets/images/farol-opala.jpg',
    3
);

-- =====================================================
-- USUARIO TESTE
-- senha: 123456
-- =====================================================

INSERT INTO users
(
    name,
    email,
    password
)
VALUES
(
    'Administrador',
    'admin@retrogarage.com',
    '$2b$10$8T4K1fGxkCzGQm1wK9QjCeL8jvP4wz1yM5mP0v7VjWgN4h3aJ7J2O'
);