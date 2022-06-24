import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployerRollModule } from './employer_roll/employer_roll.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'Demo',
      username: 'postgres',
      password: 'Qwer!234',
      synchronize: true,
      logging: false,
      schema: 'Master',      
      autoLoadEntities:true
  
    }),
    EmployerRollModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
