export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <h2>Methodology & Conclusion</h2>
                <p className="footer-summary">
                    This interactive dashboard is based on the research paper <em>"A Comparative Analysis of Urban and Rural Government Schools in Jammu: Perspectives from NEP 2020 and SDG 4."</em> The data highlights that while urban schools benefit from geographical advantages, systemic apathy and high staff turnover cripple their outcomes. Conversely, rural schools, despite severe infrastructural and economic deficits, leverage experienced educators to drive higher progression rates.
                </p>

                <div className="methodology-grid">
                    <div className="meth-card">
                        <h3>The Scope</h3>
                        <p>Primary data collected via purposive stratified sampling across 6 government schools (3 urban, 3 rural) within the Jammu district.</p>
                    </div>
                    <div className="meth-card">
                        <h3>The Participants</h3>
                        <p>Surveys and structured interviews were conducted across three primary stakeholder categories: Principals, Teachers, and Students.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}