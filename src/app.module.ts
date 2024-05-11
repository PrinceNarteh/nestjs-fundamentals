import { Module } from '@nestjs/common';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'admin',
      host: 'localhost',
      port: 5432,
      database: 'nestjs_fundamentals',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
