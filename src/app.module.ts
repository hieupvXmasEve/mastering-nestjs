import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/database.config';
import { DatabaseConfigService } from './config/database.config.service';
import { MessageModule } from './message/message.module';
import serverConfig from './config/server.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [serverConfig, databaseConfig],
      cache: true,
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
    MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
