# action-package-version-bump

**DISCLAIMER**: this action works only on pull requests that are created from branches of the same target repo. Because of this issue: https://github.com/actions/checkout/issues/455

Github action to upgrade the package.json version and create a changelog based on PR description that can be triggered in your workflows


## How to use 

This action is intended to work only when executed within a PR. Hence you need to use the following workflow trigger:

```
on:
  pull_request:
```

The full specification of what you can do with this event is available here: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request

Once you have defined what kind of event should trigger it, just add this action to your workflow, it will update your package.json based on your strategy but always based on your reference branch (main by default), it also updates the CHANGELOG.md by concatenating the description of the PR with the existing content of the CHANGELOG.md.

There are several required options for this action that are listed here: https://github.com/Drassil/action-package-version-bump/blob/2d8b5f7b520539600b819b150f0f5548fb10006c/action.yml#L4-L28

An example of how to use it is available here: https://github.com/Drassil/action-package-version-bump/blob/2d8b5f7b520539600b819b150f0f5548fb10006c/.github/workflows/test.yml#L1-L26

## Demo

This is a video of how this action works:

https://user-images.githubusercontent.com/147092/154951557-66b8b838-0f04-4d01-aebc-1404414d4ee6.mp4
