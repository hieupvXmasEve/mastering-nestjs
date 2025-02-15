import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/database.config';
import { DatabaseFactory } from './setup/database.factory';
import { MessageModule } from './message/message.module';
import serverConfig from './config/server.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [serverConfig, databaseConfig],
      cache: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseFactory,
      inject: [ConfigService],
    }),
    MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
