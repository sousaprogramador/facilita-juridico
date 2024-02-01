-- public.users definition

CREATE TABLE public.users (
	id uuid NOT NULL,
	"name" varchar NOT NULL,
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL
);

-- public.clients definition

CREATE TABLE public.clients (
	id uuid NOT NULL,
	"name" varchar NOT NULL,
	email varchar NOT NULL,
	phone varchar NOT NULL,
	cep varchar NOT NULL,
	"address" varchar NOT NULL,
	"state" varchar NOT NULL,
	city varchar NOT NULL,
	complement varchar NOT NULL,
	cood_x NUMERIC NULL,
	cood_y NUMERIC NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL
);