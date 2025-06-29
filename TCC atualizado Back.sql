drop database systemPos;
create database systemPos;
use systemPos;

--  criado uma tabela apenas para os dados pessoais do dono separando de dados sensiveis de login (caso dono esteja vazio, o primeiro registro será dele)
create table dono(
    id INT PRIMARY KEY,
    
    cpf VARCHAR(11) UNIQUE NOT NULL,
    data_nascimento DATE,
    endereco_particular TEXT,
    
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    ativo bool default true -- caso haja socios ou troque de dono
);

create table empresa(
	id INT AUTO_INCREMENT PRIMARY KEY,
    dono_id INT NOT NULL,
    
    razao_social VARCHAR(100) NOT NULL,
    nome_fantasia VARCHAR(100) NOT NULL,
    cnpj VARCHAR(14) UNIQUE NOT NULL,
    FOREIGN KEY (dono_id) REFERENCES dono(id),
    
	-- Endereço Fiscal (obrigatorio para NF-e)
    endereco_logradouro VARCHAR(100) NOT NULL,
    endereco_numero VARCHAR(10) NOT NULL,
    endereco_complemento VARCHAR(50),
    endereco_bairro VARCHAR(50) NOT NULL,
    endereco_cidade VARCHAR(50) NOT NULL,
    endereco_estado CHAR(2) NOT NULL,
    endereco_cep VARCHAR(8) NOT NULL,
	
	-- Controle caso mais de uma loja (pensando no futuro)
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_inatividade datetime,
    ativo BOOLEAN DEFAULT TRUE
);
create table usuarios(
	id int auto_increment primary key,
    dono_id int, -- caso tenha mais de um dono vai mostrar o id dele

    email  varchar(100) unique not null,
    userlogin varchar(25) unique not null,
    senha_hash varchar(255) not null, -- tipo de criptografia
    tipo enum('dono', 'gerente', 'caixa', 'estoque', 'admin') not null, -- vou verificar porque por ser uma loja pequena talvez nao precise de tantos
   
    nome_completo varchar(100) not null,
    telefone VARCHAR(20) NOT NULL, 
    whatsapp bool default 0, -- mostra um icone whatsapp ao lado do contato caso possua whatsapp
    genero enum('Masculino', 'Feminino') not null,

    data_cadastro datetime default current_timestamp, -- salva registro automatico
    ultimo_login datetime null, -- segurança de sistema
    ativo boolean default true, -- funcionarios desativados não aparecem em tela, e mantem dados ainda registrados
    tentativas_login int default 0, -- garante um limite para segurança
    data_bloqueio datetime null, -- mais segurança
    
    foreign key (dono_id) references dono(id) on delete set null, -- caso não tenha o dono aposente/vende apenas desvincula o dado usuario com o dono, garantido registro ainda porem sem vinculação ao dono
    constraint chk_email check (email like '%_@__%.__%') -- modelo email
);

create table cadastro_produto(
	codigo_produto int primary key,
	nome varchar(40) not null,
    marca varchar (20) not null,
    codigo_barras varchar (50) not null unique,
    fornecedor varchar (60) not null,
    tipo_produto varchar (20) not null,
    modelo varchar (50) not null,
    categoria varchar (30) not null,
    data_validade date not null,
    preco decimal (10, 2) not null,
    data_exclusao datetime,
    ativo boolean default true 
);

INSERT INTO dono (
	id,
    cpf,
    data_nascimento,
    endereco_particular
) VALUES (
	'1',
    '12345678901',
    '1990-05-20',
    'Rua das Flores, 123 - Centro'
);

INSERT INTO usuarios (
    dono_id,
    email,
    userlogin,
    senha_hash,
    tipo,
    nome_completo,
    telefone,
    whatsapp,
    genero
) VALUES (
    1, -- id do dono correspondente na tabela "dono"
    'joao.silva@example.com',
    'joaosilva',
    '$2b$10$ExemploDeHashDeSenhaCriptografadaAqui1234567890', -- hash fictício (bcrypt)
    'gerente',
    'João da Silva',
    '(11) 91234-5678',
    1, -- tem WhatsApp
    'Masculino'
);

#select * from dono;
#select * from empresa;
#select * from usuarios;
#select * from cadastro_produto;