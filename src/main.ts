import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ServerConfig, ServerConfigName } from './config/server.config';
import { ValidationPipe } from '@nestjs/common';

async function server() {
  const app = await NestFactory.create(AppModule);

  // Get the server configuration
  const configService = app.get(ConfigService);
  const serverConfig = configService.getOrThrow<ServerConfig>(ServerConfigName);

  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(serverConfig.port);
}

server();
