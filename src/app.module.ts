import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: 'sjcrippadb',
      host: 'localhost',
      port: 3306,
      database: 'nestdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // any file with .entity will be upload at once.
      synchronize: true, // synchronize all the classes with the table (for development, in prod must use migrations???)
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
