import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateCandidateDto {
  @IsString() // Was IsUUID
  filer_id: string;

  @IsString() // Was IsUUID
  office_id: string;

  first_name: string;

  middle_name: string;

  last_name: string;

  title: string;

  suffix: string;

  office: string;

  office_code: string;

  @IsString() // Was IsUUID
  jurisdiction_id: string;

  district: string;

  agency: string;

  jurisdiction_type: string;

  jurisdiction_name: string;

  jurisdiction_code: string;

  candidate_name: string;

  election_year: string;

  @Expose()
  get candidate_id() {
    return `${this.filer_id}|${this.election_year}`;
  }

  @Expose()
  get full_office_name() {
    return this.district
      ? `${this.office} ${this.jurisdiction_name} - Dist ${this.district}`
      : `${this.office} ${this.jurisdiction_name}`;
  }
}
