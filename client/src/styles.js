import styled from 'styled-components';
import { blue, magenta, purple } from '@carbon/colors';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${purple[70]};
  color: ${purple[20]};
  border: 2px solid #2ecc40;
  border-radius: 2px;
  font-weight: bold;
`;