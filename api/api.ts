export * from './auth.service';
import { AuthService } from './auth.service';
export * from './translation.service';
import { TranslationService } from './translation.service';
export * from './unit.service';
import { UnitService } from './unit.service';
export * from './wordType.service';
import { WordTypeService } from './wordType.service';
export const APIS = [AuthService, TranslationService, UnitService, WordTypeService];
