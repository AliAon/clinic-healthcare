import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { IsAuthMiddleware } from './middleware/is-auth/is-auth.middleware';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { DoctorModule } from './modules/doctor/doctor.module';
import { Doctor } from './models/doctor.model';
import { PatientModule } from './modules/patient/patient.module';
import { Patient } from './models/patient.model';
import { AppointmentModule } from './modules/appointment/appointment.module';
import { Appointment } from './models/appointment.model';
import { StaffModule } from './modules/staff/staff.module';
import { Staff } from './models/staff.model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      autoLoadModels: true,
      synchronize: true,
      models: [User, Doctor, Patient, Appointment, Staff],
    }),
    UsersModule,
    AuthModule,
    DoctorModule,
    PatientModule,
    AppointmentModule,
    StaffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IsAuthMiddleware)
      .exclude(
        { path: 'api/auth/signup', method: RequestMethod.POST },
        { path: 'api/auth/login', method: RequestMethod.POST },
      )
      .forRoutes('*');
  }
}
