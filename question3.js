const mysql = require('mysql');

const customers = [
  {
    email: 'anurag11@yopmail.com',
    name: 'anurag'
  },
  {
    email : "sameer11@yopmail.com" ,
    name : "sameer"
    },
    {
    email : "ravi11@yopmail.com" ,
    name : "ravi"
    },
    {
    email : "akash11@yopmail.com" ,
    name : "akash"
    },
    {
    email : "anjali11@yopmail.com" ,
    name : "anjai"
    },
    {
    email : "santosh11@yopmail.com" ,
    name : "santosh"
    }
];

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect();

function insertCustomers(customers) {
  customers.forEach(customer => {
    const { email, name } = customer;
    const query = `
      INSERT INTO customers (email, name)
      VALUES ('${email}', '${name}')
      ON DUPLICATE KEY UPDATE name = VALUES(name)
    `;

    connection.query(query, (error, results) => {
      if (error) throw error;
      console.log(`Customer inserted: ${name}`);
    });
  });
}

insertCustomers(customers);

connection.end();
