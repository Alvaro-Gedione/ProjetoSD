const mqtt = require('mqtt');

// URL do broker público
const brokerUrl = 'mqtt://broker.emqx.io';

// Conexão com o broker
const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
    console.log('Conectado ao broker público MQTT');

    // Subscribing aos tópicos
    client.subscribe(['home/temperature', 'home/humidity'], (err) => {
        if (!err) {
            console.log('Inscrito nos tópicos: home/temperature, home/humidity');
        } else {
            console.error('Erro ao se inscrever:', err);
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`Mensagem recebida no tópico ${topic}: ${message.toString()}`);
});

client.on('error', (err) => {
    console.error('Erro:', err);
});
