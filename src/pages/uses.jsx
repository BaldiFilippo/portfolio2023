/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Baldi Filippo</title>
        <meta
          name="description"
          content="Software che uso, gadget che amo e altre cose che consiglio.
"
        />
      </Head>
      <SimpleLayout
        title="Software che uso, gadget che amo e altre cose che consiglio"
        intro="Ecco un elenco di tutti gli strumenti preferiti."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title=" MacBook Air, M1 (2020)">
              usavo un MacBook Pro da 16 pollici basato su Intel prima di
              questo. Devo dire che il nuovo sistema su chip M1 è davvero
              impressionante.
            </Tool>
            <Tool title="Apple Pro Display XDR (Standard Glass)">
              The only display on the market if you want something HiDPI and
              bigger than 27”. When you’re working at planetary scale, every
              pixel you can get counts. Uso questo computer portatile come
              dispositivo principale per le mie attività di sviluppo.
            </Tool>
            <Tool title="Apple magic keyboard">
              Un ottimo prodotto che mi permette di scrivere in modo
              confortevole con un design elegante.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Prodotto che introduce delle gesture uniche che mi permettono di
              lavorare in modo più veloce.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Arc">
              Sono molto interessato al progetto e perché si differenzia da
              altri browser. Offre funzionalità come privacy e miglioramenti
              della sicurezza, nonché un'interfaccia utente personalizzabile.q
              Inoltre, essendo un progetto open source, apprezzo il trasparenza
              e coinvolgimento della comunità nel suo sviluppo.
            </Tool>
            <Tool title="Visual Studio Code">
              Reputo questo editor il migliore sotto doversi punti di vista.
              Perfetto per lo sviluppo di applicazioni web.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Ho iniziato a utilizzare Figma solo come strumento di
              progettazione, ma ora è diventato la lavagna virtuale presonale.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
