import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ElectionYearsModule } from './election-years/election-years.module';
import { OfficesModule } from './offices/offices.module';
import { CandidateModule } from './candidate/candidate.module';
import { CommitteeModule } from './committee/committee.module';
import { ContributionsModule } from './contributions/contributions.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ElectionYearsModule,
    OfficesModule,
    CandidateModule,
    CommitteeModule,
    ContributionsModule,
    ExpensesModule,
  ],
})
export class GraphQLSetupModule {}