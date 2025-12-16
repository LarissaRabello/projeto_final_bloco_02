import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Farmácia API')
    .setDescription('API do Projeto Farmácia')
    .setContact("Generation Brasil", "http://www.generationbrasil.online", "generation@email.com")
    .setVersion('1.0')
    .addTag('farmacia')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  process.env.TZ = '-03:00';
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();