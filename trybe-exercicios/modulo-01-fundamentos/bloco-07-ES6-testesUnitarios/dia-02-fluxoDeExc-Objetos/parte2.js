const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, 
  Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number}, 
  AP: ${order.address.apartment}.`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  order.payment.total = 50;
  order.order.pizza.marguerita.name = 'marguerita';
  order.order.pizza.pepperoni.name = 'pepperoni';
  return `Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de 
  ${order.order.pizza.marguerita.name}, ${order.order.pizza.pepperoni.name} e ${order.order.drinks.coke.type} 
  é ${order.payment.total}.`;

}
console.log('--------------------')
console.log(orderModifier(order));
