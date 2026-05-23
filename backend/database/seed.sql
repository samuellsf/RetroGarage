USE retrogarage;

INSERT INTO categorias(name)
VALUES
('Carros'),
('Motos'),
('Peças');

INSERT INTO products(name, description, price, stock, image, category_id)
VALUES
('BMW M3', 'Esportivo clássico', 350000, 2, 'bmw.jpg', 1),
('Yamaha R1', 'Moto esportiva retrô', 120000, 3, 'r1.jpg', 2),
('Kit Turbo', 'Turbo para preparação', 5000, 10, 'turbo.jpg', 3);