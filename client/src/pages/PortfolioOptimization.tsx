import { AlertTriangle, BarChart3, Calculator, LockKeyhole, PieChart, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const optimizationStates = [
  { label: "Portfolio and holdings source", value: "Not configured", icon: PieChart },
  { label: "Market and risk data", value: "Unavailable", icon: BarChart3 },
  { label: "Optimization methodology", value: "Unavailable", icon: Calculator },
  { label: "Rebalance execution", value: "Disabled", icon: LockKeyhole },
];

export default function PortfolioOptimization() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Portfolio Optimization"
        description="Portfolio optimization is not enabled in this deployment. No allocation, return, forecast, risk score, recommendation, or rebalance result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Optimization actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to a portfolio, market-data source, risk model, suitability profile, optimizer, tax model, or trading venue. It does not recommend an allocation, predict returns, score risk, rebalance holdings, or submit orders. No investment or financial outcome should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Optimization readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production portfolio-optimization system requires verified holdings and prices, a documented objective and methodology, risk and suitability inputs, constraints, liquidity and tax assumptions, data freshness, scenario and stress testing, explainable output, user confirmation, and independently verified order and settlement infrastructure. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <PieChart aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Portfolio boundary</h3>
                  <p className="text-sm text-muted-foreground">No account, holding, balance, cost basis, asset weight, ownership, or liquidity record is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Model boundary</h3>
                  <p className="text-sm text-muted-foreground">No price, return, volatility, correlation, forecast, risk score, objective, constraint, or scenario result is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Execution boundary</h3>
                  <p className="text-sm text-muted-foreground">No recommendation, approval, rebalance, order, fee, tax, fill, or settlement result is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/portfolio">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View portfolio status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="outline">View documentation</Button>
              </Link>
              <Link href="/contact-us-form">
                <Button size="lg" variant="ghost">Ask about integration</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="optimization-state-heading">
          <h2 id="optimization-state-heading" className="mb-4 text-xl font-semibold">Current optimization state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {optimizationStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <div className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
                    <p className="text-lg font-semibold">{value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not use this page as personalized financial advice or evidence of an optimized portfolio, expected return, risk assessment, rebalance, or executed trade. Verify data, methodology, assumptions, and execution independently until the required integration is available.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
