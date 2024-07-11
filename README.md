# Ecommerce con Next.js

Este es un proyecto de ecommerce desarrollado con [Next.js](https://nextjs.org/) y desplegado en [Amazon S3](https://aws.amazon.com/s3/) para el alojamiento estático.

## Descripción

Este proyecto es una aplicación de ecommerce completa que incluye las siguientes características:

- Páginas de productos con detalles dinámicos.
- Carrito de compras persistente.
- Sistema de autenticación de usuarios.
- Integración con pasarelas de pago.
- Implementación de un backend con Node.js y AWS Lambda.
- Uso de DynamoDB como base de datos.

## Tecnologías Utilizadas

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Node.js](https://nodejs.org/), [AWS Lambda](https://aws.amazon.com/lambda/) y [API Gateway](https://aws.amazon.com/api-gateway/)
- **Base de Datos**: [DynamoDB](https://aws.amazon.com/dynamodb/)
- **Almacenamiento de Archivos**: [Amazon S3](https://aws.amazon.com/s3/)
- **Distribución de Contenido**: [AWS CloudFront](https://aws.amazon.com/cloudfront/)

## Despliegue

El frontend de la aplicación está alojado en Amazon S3 y servido a través de AWS CloudFront para una distribución rápida y segura del contenido. El backend está implementado utilizando Node.js, AWS Lambda y API Gateway para manejar las solicitudes de la aplicación, y DynamoDB se utiliza como base de datos.


