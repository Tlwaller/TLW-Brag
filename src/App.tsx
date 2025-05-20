import { Container, Row, Col, Badge, Card } from 'react-bootstrap';

const PRIMARY = '#3FABD9';
const ACCENT = '#EE8411';

const montserratBoldItalic = {
  fontFamily: "'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: 700,
  fontStyle: 'italic',
};

const montserratBoldNormal = {
  fontFamily: "'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: 700,
  fontStyle: 'normal',
};

const montserratBoldItalicText = {
  fontFamily: "'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: 700,
  fontStyle: 'italic',
};

function App() {
  return (
    <Container
      className="py-5"
      style={{
        maxWidth: '720px',
        ...montserratBoldNormal,
      }}
    >
      {/* Header */}
      <header className="mb-5 text-center">
        <h1
          className="fw-bold"
          style={{
            color: PRIMARY,
            letterSpacing: '0.05em',
            ...montserratBoldNormal,
          }}
        >
          Trey Waller
        </h1>
        <h4
          className="mb-3"
          style={{
            color: PRIMARY,
            ...montserratBoldItalic,
          }}
        >
          Front End Engineer
        </h4>
        <div>
          {[
            'React',
            'JavaScript',
            'TypeScript',
            'React-Bootstrap / Bootstrap 5',
            'MySQL',
            'PostgreSQL',
            'GraphQL',
            'Node.js',
            '.NET (some)',
          ].map((tech) => (
            <Badge
              key={tech}
              pill
              className="me-2 mb-2"
              style={{
                backgroundColor: ACCENT,
                color: 'white',
                fontSize: '0.85rem',
                boxShadow: `0 2px 6px ${ACCENT}88`,
                ...montserratBoldNormal,
                fontStyle: 'italic',
              }}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </header>

      {/* Accomplishments */}
      <section className="mb-5">
        <h3
          className="mb-4"
          style={{
            borderBottom: `3px solid ${PRIMARY}`,
            paddingBottom: '0.3rem',
            color: PRIMARY,
            ...montserratBoldNormal,
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
          }}
        >
          Accomplishments
        </h3>
        <Card
          className="p-4 shadow-sm"
          style={{
            borderLeft: `6px solid ${ACCENT}`,
            backgroundColor: '#f9fbfd',
            fontSize: '1rem',
            lineHeight: 1.5,
            ...montserratBoldItalicText,
          }}
        >
          <ul className="mb-0" style={{ paddingLeft: '1.2rem' }}>
            <li className="mb-3" style={montserratBoldItalicText}>
              Spearheaded multiple front-end redesigns/improvements of the{' '}
              <a
                href="https://portal.powershades.com/#/Home"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#8DC63F',
                  textDecoration: 'underline',
                  fontWeight: 700,
                  fontStyle: 'italic',
                }}
              >
                PowerShades Dealer Portal
              </a>
              , resulting in smoother workflows and increased user satisfaction.
            </li>
            <li className="mb-3" style={montserratBoldItalicText}>
              Architected and built{' '}
              <a
                href="https://snapraise.com/insights/#form"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#15339B',
                  textDecoration: 'underline',
                  fontWeight: 700,
                  fontStyle: 'italic',
                }}
              >
                Snap! Raise’s “Insights V2”
              </a>
              {' '}web app from the ground up, focusing on scalable, maintainable React patterns.
            </li>
            <li style={montserratBoldItalicText}>
              Built personal projects like a skate spot logging site and a 90’s internet-themed
              e-vite builder.
            </li>
          </ul>
        </Card>
      </section>

      {/* Impact */}
      <section className="mb-5">
        <h3
          className="mb-4"
          style={{
            borderBottom: `3px solid ${PRIMARY}`,
            paddingBottom: '0.3rem',
            color: PRIMARY,
            ...montserratBoldNormal,
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
          }}
        >
          Impact Highlights
        </h3>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card
              className="h-100 shadow"
              style={{ borderTop: `5px solid ${ACCENT}` }}
            >
              <Card.Body>
                <Card.Text style={montserratBoldItalicText}>
                  ⚡Cut load times on{' '}
                  <a
                    href="https://snapraise.com/insights/#form"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#15339B',
                      textDecoration: 'underline',
                      fontWeight: 700,
                      fontStyle: 'italic',
                    }}
                  >
                    Snap! Raise’s Insights V1
                  </a>
                  {' '}from ~1-2 minutes to ~1-2 seconds by implementing{' '}
                  <span style={{ color: PRIMARY, fontWeight: '700', fontStyle: 'italic' }}>React Context</span> and efficient state management.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="h-100 shadow"
              style={{ borderTop: `5px solid ${ACCENT}` }}
            >
              <Card.Body>
                <Card.Text style={montserratBoldItalicText}>
                  🔄 Improved navigation and overall user experience on{' '}
                  <a
                    href="https://portal.powershades.com/#/Home"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#8DC63F',
                      textDecoration: 'underline',
                      fontWeight: 700,
                      fontStyle: 'italic',
                    }}
                  >
                    PowerShades Dealer Portal
                  </a>
                  {' '}through comprehensive front-end redesigns.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Technical Contributions */}
      <section>
        <h3
          className="mb-4"
          style={{
            borderBottom: `3px solid ${PRIMARY}`,
            paddingBottom: '0.3rem',
            color: PRIMARY,
            ...montserratBoldNormal,
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
          }}
        >
          Technical Contributions
        </h3>
        <Card
          className="p-3 shadow-sm"
          style={{
            borderLeft: `6px solid ${ACCENT}`,
            backgroundColor: '#f9fbfd',
            fontSize: '1rem',
            ...montserratBoldItalicText,
          }}
        >
          <ul className="mb-0" style={{ paddingLeft: '1.2rem' }}>
            <li className="mb-2" style={montserratBoldItalicText}>
              Introduced <strong style={{ color: ACCENT, ...montserratBoldItalicText }}>Split.IO</strong> feature flagging and enhanced React Context
              patterns at Snap! Raise for scalable development.
            </li>
            <li style={montserratBoldItalicText}>
              Championed clean, maintainable code and close collaboration with backend teams to optimize
              GraphQL queries and Node.js APIs.
            </li>
          </ul>
        </Card>
      </section>
    </Container>
  );
}

export default App;