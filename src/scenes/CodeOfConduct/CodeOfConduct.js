import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import Typed from '../../components/Typed';

const CodeOfConduct = () => (
  <Container maxWidth="md">
    <Box mt={10}>
      <Grid
        container
        direction="row"
        justify="center"
      >
        <Grid item sm="12">
          <Box mb={10}>
            <Box mb={5}>
              <Typed
                component="h1"
                variant="h2"
                content={[
                  'Código de Conduta',
                ]}
              />
            </Box>

            <Typography>
              Participantes, palestrantes, representantes de empresas e pessoas
              voluntárias da conferência precisam concordar com este código de conduta.
              A equipe organizadora vai reforçar que este código seja seguido durante
              todo o evento. Esperamos a cooperação de todas as partes para ajudar a
              garantir um ambiente seguro para qualquer pessoa.
            </Typography>
          </Box>

          <Box mb={10}>
            <Box mb={5}>
              <Typography component="h2" variant="h4">
                Versão rápida
              </Typography>
            </Box>

            <Typography>
              Nossa conferência é dedicada a fornecer uma experiência livre de assédio
              para todas as pessoas, independentemente do sexo, identidade de gênero e
              expressão, idade, orientação sexual, deficiência, aparência física,
              tamanho corporal, cor de pele, etnia, religião (ou falta dela) ou escolhas
              de tecnologias. Não toleramos o assédio a participantes da conferência,
              sob qualquer forma. Linguagem e imagens sexuais não são apropriadas em
              nenhum local, incluindo palestras, workshops, festas, Twitter e outras
              mídias on-line. Violações destas regras poderão causar expulsão da
              conferência,
              <em>sem restituição</em>, a critério da equipe organizadora.
            </Typography>
          </Box>

          <Box mb={10}>
            <Box mb={5}>
              <Typography component="h2" variant="h4">
                Versão mais longa
              </Typography>
            </Box>

            <Typography paragraph>
              Constituem assédio comentários verbais ofensivos relacionados a gênero,
              identidade de gênero e expressão, idade, orientação sexual, deficiência,
              aparência física, tamanho corporal, cor de pele, etnia, religião, escolhas
              de tecnologias, imagens sexuais em espaços públicos, intimidação
              deliberada, perseguição, <em>stalking</em>, fotografias ou filmagens
              constrangedoras, interrupção contínua das apresentações ou outros eventos,
              contato físico inadequado e atenção sexual indesejada.
            </Typography>

            <Typography paragraph>
              Participantes que receberem uma solicitação para interromper qualquer
              comportamento de assédio devem fazer isso imediatamente.
            </Typography>

            <Typography paragraph>
              As políticas antiassédio também se aplicam a representantes de empresas
              patrocinadoras. Em particular, não devem usar imagens, atividades ou outro
              material de cunho sexual. As equipes de estandes e tendas (incluindo
              pessoas voluntárias) não devem utilizar roupas, uniformes ou trajes
              sexualizados ou criar um ambiente sexualizado de quaisquer formas.
            </Typography>

            <Typography paragraph>
              Se alguém se envolver em comportamento de assédio, a equipe organizadora
              poderá tomar todas as medidas que considerar adequadas, incluindo avisar a
              pessoa ofensora ou expulsá-la da conferência sem nenhum reembolso.
            </Typography>

            <Typography paragraph>
              Caso sofra assédio, perceba que alguém esteja sofrendo assédio ou tenha
              alguma dúvida, entre em contato com alguém da organização imediatamente.
              As pessoas da equipe da conferência podem ser identificadas, pois estarão
              vestindo camisetas marcadas.
            </Typography>

            <Typography paragraph>
              A organização estará disposta a auxiliar participantes a entrar em contato
              com a segurança do hotel ou local, bem como aplicar a legislação
              pertinente, fornecer escoltas ou ajudar pessoas que sofrerem assédio para
              que se sintam seguras durante a conferência. Valorizamos sua participação.
            </Typography>

            <Typography paragraph>
              Esperamos que todas as pessoas participantes sigam estas regras em salas
              de apresentação e workshops da conferência, além de eventos sociais
              relacionados.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography paragraph variant="body2">
              Crédito e fonte original
            </Typography>

            <Typography variant="body2">
              <Link
                href="http://2012.jsconf.us/#/about"
                target="_blank"
                color="secondary"
              >
                http://2012.jsconf.us/#/about
              </Link>
            </Typography>

            <Typography paragraph variant="body2">
              <Link
                href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy"
                target="_blank"
                color="secondary"
              >
                The Ada Initiative
              </Link>
            </Typography>

            <Typography paragraph variant="body2">
              Esta obra está licenciada sob&nbsp;
              <Link
                rel="license"
                href="http://creativecommons.org/licenses/by/3.0/deed.en_US"
                target="_blank"
                color="secondary"
              >
                Creative Commons Attribution 3.0 Unported License
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default CodeOfConduct;
