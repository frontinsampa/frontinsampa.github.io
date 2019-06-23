module.exports = {
  tagFormat: '${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog', {
        changelogFile: 'CHANGELOG.md',
      }
    ],
    [
      '@semantic-release/github', {
        assets: [
          'CHANGELOG.md',
          'README.md',
          'public/**'
        ],
        releasedLabels: ['pr: released'],
      },
    ],
    [
      '@semantic-release/git', {
        assets: ['CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version}\n\n[skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
