module.exports = {
  branch: 'site',
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
        releasedLabels: ['pr: released'],
      },
    ],
    [
      '@semantic-release/git', {
        assets: [
          'CHANGELOG.md',
          'package.json',
        ],
        message: 'chore(release): ${nextRelease.version}\n\n[skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
