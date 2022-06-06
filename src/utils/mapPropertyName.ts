import { propertiesMapperRuEng } from 'constants/propertiesMapperRuEng';

const mapPropertyName = (property: string): string => {
    return propertiesMapperRuEng[property];
};

export default mapPropertyName;
