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

INSERT INTO public.users (id,name,email,"password",created_at,updated_at) VALUES
	 ('efa197a5-1fd7-4008-b38b-afb3bccb81f5','mateus','sousa.programador@gmail.com','$2b$10$dZUgT1ywFKQky7uRRylsaeaex3tLmebowghBJVpoW19o19QkvEAMm','2024-01-15 22:34:47.541','2024-01-15 22:34:47.541');