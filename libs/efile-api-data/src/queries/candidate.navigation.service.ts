import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CandidateEntity } from '../tables/entity/candidates.entity';
import { CandidateNavigation } from 'apps/sdvv-backend-nest/src/api/interfaces/candidate.navigation';

@Injectable()
export class CandidateNavigationService {
  constructor(private connection: Connection) {}

  async getCandidateNavigationByYear(
    year: string,
  ): Promise<CandidateNavigation[]> {
    const query = this.connection
      .getRepository(CandidateEntity)
      .createQueryBuilder()
      .select('candidate_id', 'id')
      .addSelect(`CONCAT( first_name, ' ',  last_name )`, 'fullName')
      .addSelect('office', 'officeType')
      .addSelect('full_office_name', 'fullOfficeName')
      .addSelect('district', 'seatName')
      .addSelect('election_year', 'year')
      .addSelect('in_general_election', 'inGeneralElection')
      .where('office IN (:...cityOffices)', {
        cityOffices: ['Mayor', 'City Council', 'City Attorney'],
      })
      .orderBy('last_name', 'ASC');

    if (year !== '0') {
      query.andWhere('election_year = :year', { year });
    }

    const candidateNavigation = await query.getRawMany();

    candidateNavigation.forEach((candidate) => {
      candidate.seatType = candidate.seatName ? 'district' : null;
    });

    return candidateNavigation;
  }
}