import { useTranslation } from 'react-i18next'

export function AboutContent() {
  const { t } = useTranslation()

  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold">{t('about.title')}</h2>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-4 leading-relaxed">{t('about.content.intro')}</p>
        <p className="text-muted-foreground mb-4 leading-relaxed">{t('about.content.passion')}</p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {t('about.content.technologies')}
        </p>
        <p className="text-muted-foreground leading-relaxed">{t('about.content.goal')}</p>
      </div>
    </div>
  )
}
