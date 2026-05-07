const products = [
  {
    id: 1,
    name: "Tapete Floral",
    category: "Tapetes",
    price: 120.0,
    status: "Sob Encomenda",
    description:
      "Tapete artesanal em crochê com detalhes florais e acabamento delicado.",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Tapete Floral."
  },

  {
    id: 2,
    name: "Bolsa Boho",
    category: "Bolsas",
    price: 95.0,
    status: "Sob Encomenda",
    description:
      "Bolsa estilo boho feita em crochê com alça reforçada.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse na Bolsa Boho."
  },

  {
    id: 3,
    name: "Sousplat Elegance",
    category: "Decoração",
    price: 35.0,
    status: "Sob Encomenda",
    description:
      "Sousplat artesanal ideal para mesas elegantes e decorativas.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Sousplat Elegance."
  },

  {
    id: 4,
    name: "Amigurumi Coelho",
    category: "Amigurumi",
    price: 68.0,
    status: "Sob Encomenda",
    description:
      "Coelhinho em crochê feito à mão com acabamento macio.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Amigurumi Coelho."
  },

  {
    id: 5,
    name: "Manta Soft",
    category: "Casa",
    price: 180.0,
    status: "Sob Encomenda",
    description:
      "Manta confortável em crochê para sofá ou cama.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse na Manta Soft."
  },

  {
    id: 6,
    name: "Touca Infantil",
    category: "Roupas",
    price: 45.0,
    status: "Sob Encomenda",
    description:
      "Touca infantil artesanal com acabamento confortável.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse na Touca Infantil."
  },

  {
    id: 7,
    name: "Jogo de Banheiro",
    category: "Casa",
    price: 150.0,
    status: "Sob Encomenda",
    description:
      "Kit completo para banheiro feito em crochê artesanal.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Jogo de Banheiro."
  },

  {
    id: 8,
    name: "Centro de Mesa Rosas",
    category: "Decoração",
    price: 55.0,
    status: "Sob Encomenda",
    description:
      "Centro de mesa delicado com detalhes em rosas.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Centro de Mesa Rosas."
  },

  {
    id: 9,
    name: "Blusa Verão",
    category: "Roupas",
    price: 110.0,
    status: "Sob Encomenda",
    description:
      "Blusa leve em crochê ideal para dias quentes.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse na Blusa Verão."
  },

  {
    id: 10,
    name: "Chaveiro Ursinho",
    category: "Mimos",
    price: 18.0,
    status: "Sob Encomenda",
    description:
      "Chaveiro artesanal de ursinho feito em crochê.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Chaveiro Ursinho."
  },

  {
    id: 11,
    name: "Cesto Organizador",
    category: "Casa",
    price: 75.0,
    status: "Sob Encomenda",
    description:
      "Cesto organizador resistente e elegante em crochê.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Cesto Organizador."
  },

  {
    id: 12,
    name: "Vestido Infantil",
    category: "Roupas",
    price: 145.0,
    status: "Sob Encomenda",
    description:
      "Vestido infantil artesanal com acabamento delicado.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Vestido Infantil."
  },

  {
    id: 13,
    name: "Amigurumi Dinossauro",
    category: "Amigurumi",
    price: 85.0,
    status: "Sob Encomenda",
    description:
      "Dinossauro em crochê divertido e totalmente artesanal.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Amigurumi Dinossauro."
  },

  {
    id: 14,
    name: "Bolsa Minimalista",
    category: "Bolsas",
    price: 98.0,
    status: "Sob Encomenda",
    description:
      "Bolsa moderna em crochê com estilo minimalista.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse na Bolsa Minimalista."
  },

  {
    id: 15,
    name: "Tapete Redondo",
    category: "Tapetes",
    price: 130.0,
    status: "Sob Encomenda",
    description:
      "Tapete redondo artesanal perfeito para decoração.",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Tapete Redondo."
  },

  {
    id: 16,
    name: "Peso de Porta Coruja",
    category: "Decoração",
    price: 42.0,
    status: "Sob Encomenda",
    description:
      "Peso de porta em formato de coruja feito em crochê.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Peso de Porta Coruja."
  },

  {
    id: 17,
    name: "Porta Copos",
    category: "Decoração",
    price: 28.0,
    status: "Sob Encomenda",
    description:
      "Kit de porta copos em crochê com acabamento premium.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Porta Copos."
  },

  {
    id: 18,
    name: "Cachecol Inverno",
    category: "Roupas",
    price: 70.0,
    status: "Sob Encomenda",
    description:
      "Cachecol artesanal confortável para dias frios.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Cachecol Inverno."
  },

  {
    id: 19,
    name: "Naninha Bebê",
    category: "Mimos",
    price: 58.0,
    status: "Sob Encomenda",
    description:
      "Naninha artesanal macia e delicada para bebês.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse na Naninha Bebê."
  },

  {
    id: 20,
    name: "Sousplat Premium",
    category: "Decoração",
    price: 242.0,
    status: "Sob Encomenda",
    description:
      "Sousplat premium em crochê para mesas sofisticadas.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=900&auto=format&fit=crop",
    whatsapp:
      "https://wa.me/5599999999999?text=Olá! Tenho interesse no Sousplat Premium."
  }
];

export default products;