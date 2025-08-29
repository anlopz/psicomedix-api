import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './user/user.resolver';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { SurveyModule } from './survey/survey.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        graphiql: true,
        autoSchemaFile: true
    }), SurveyModule, PrismaModule],
    controllers: [AppController],
    providers: [AppService, UserResolver, PrismaService, UserService],
})
export class AppModule { }
