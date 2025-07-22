#select * from dono;
#select * from empresa;
#select * from usuarios;
#select * from cadastro_produto;

#Select de vendas:
SELECT 
    v.id AS codigo_venda,
    v.data_venda,
    v.valor_total,
    v.forma_pagamento,
    v.status,
    u.nome_completo AS vendedor,
    e.nome_fantasia AS empresa
FROM venda v
JOIN usuarios u ON v.usuario_id = u.id
JOIN empresa e ON v.empresa_id = e.id;


#Ganhos:Somatória das vendas pagas por período
SELECT 
    DATE(data_venda) AS dia,
    SUM(valor_total) AS total_ganho
FROM venda
WHERE status = 'pago'
GROUP BY DATE(data_venda)
ORDER BY dia DESC;


#Por forma de pagamento:
SELECT 
    forma_pagamento,
    SUM(valor_total) AS total_ganho
FROM venda
WHERE status = 'pago'
GROUP BY forma_pagamento;


#Gastos:
SELECT 
    DATE(data_gasto) AS dia,
    SUM(valor) AS total_gasto
FROM gastos
GROUP BY DATE(data_gasto);


#Estoque:
SELECT 
    p.nome,
    p.marca,
    p.categoria,
    p.data_validade,
    e.quantidade
FROM estoque e
JOIN cadastro_produto p ON e.codigo_produto = p.codigo_produto
WHERE e.quantidade > 0
ORDER BY p.nome;


#Clientes:
SELECT 
    nome_completo,
    cpf,
    telefone,
    email,
    endereco
FROM cliente
ORDER BY nome_completo;
