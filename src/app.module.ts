import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Mongoose } from 'mongoose'
import { UsersModule } from './users/users.module'

@Module({
    imports: [MongooseModule.forRoot(process.env.MAIN_MONGO_URI), UsersModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
